from django.contrib.auth.models import User
from rest_framework import generics, permissions
from app_smart.api import serializers
from rest_framework.response import Response
from rest_framework import status
from app_smart.api.filters import SensorFIlter, TemperaturaDataFilter, UmidadeFilterView
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.decorators import api_view
from app_smart.api.serializers import CsvSerializer, SensorSerializer, TemperaturaDataSerializer, LuminosidadeDataSerializer, ContadorDataSerializer, UmidadeDataSerializer
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.generics import ListCreateAPIView
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
import io
import csv
from django.db import models


from ..models import TiposSensores, DadosSensores,TemperaturaData, UmidadeData, LuminosidadeData, ContadorData
from rest_framework import viewsets

class CreateUserAPIViewSet(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer
    # permission_classes = [permissions.IsAdminUser]

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

class SensorViewSet(viewsets.ModelViewSet):
    queryset = DadosSensores.objects.all()
    serializer_class = serializers.SensorSerializer
    permissions_classes = [permissions.IsAuthenticated]

    filter_backends = [DjangoFilterBackend]
    filterset_class = SensorFIlter

class TipoSensorViewSet(viewsets.ModelViewSet):
    # queryset = TiposSensores.objects.all()
    # serializer_class = serializers.SensorSerializer
    permissions_classes = [permissions.IsAuthenticated]

    filter_backends = [DjangoFilterBackend]
    filterset_class = SensorFIlter


class TemperaturaView(APIView):
    def get(self):
        permission_classes = [permissions.IsAuthenticated]
        queryset = TemperaturaData.objects.all()
        serializer = TemperaturaDataSerializer(queryset)
        return Response(serializer.data)

class LuminosidadeView(APIView):
    def get(self):
        permission_classes = [permissions.IsAuthenticated]
        queryset = LuminosidadeData.objects.all()
        serializer = LuminosidadeDataSerializer(queryset)
        return Response(serializer.data)

class ContadorView(APIView):
    def get(self):
        permission_classes = [permissions.IsAuthenticated]
        queryset = ContadorData.objects.all()
        serializer = ContadorDataSerializer(queryset)
        return Response(serializer.data)

class UmidadeView(APIView):
    def get(self):
        permission_classes = [permissions.IsAuthenticated]
        queryset = UmidadeData.objects.all()
        serializer = UmidadeDataSerializer(queryset)
        return Response(serializer.data)

class SensoresView(APIView):
    def get(self):
        permission_classes = [permissions.IsAuthenticated]
        queryset = DadosSensores.objects.all()
        serializer = SensorSerializer(queryset)
        return Response(serializer.data)

class UpdateSensoresView(APIView):
    def patch(self, request):
        table = request.data.get('table')
        print(table)

        if table == 'temperatura':
            try:
                data = request.data.get('data')
                sensor_id = request.data.get('sensor_id')
                sensor = TemperaturaData.objects.get(id=sensor_id)
                serializer = TemperaturaDataSerializer(sensor, data=data, partial=True)
                print(serializer.initial_data)

                if serializer.is_valid():
                    print('testeeeeeeeeeee')
                    serializer.save()
                    return Response({"message": "Update realizado com sucesso"}, status=status.HTTP_200_OK)
                else:
                    return Response({"message": "ocorreu um erro"}, status=status.HTTP_400_BAD_REQUEST)
            except:
                return Response({"message": "Erro ao realizar o Update"}, status=status.HTTP_400_BAD_REQUEST)
        return Response({"message": "erro de tipo"}, status=status.HTTP_400_BAD_REQUEST)

class TotalSensoresView(APIView):
    def get(self, request):
        
        queryset = DadosSensores.objects.all()
        serializer = SensorSerializer(queryset)
        for i in serializer:
            print(i)
        return Response(serializer.data)


class CvsUploadView(APIView):
        
    permission_classes = [permissions.IsAuthenticated]
    queryset = DadosSensores.objects.all()
    serializer_class = CsvSerializer
    parser_classes = (MultiPartParser, FormParser)


    def post(self, request):

        serializer = CsvSerializer(data=request.data)

        if serializer.is_valid():
            
            file = request.FILES['file']
            table = request.data.get('table')
            
            if not file.name.endswith('.csv'):
                return Response({"error": "Extensao do arquivo diferente de csv"}, status=status.HTTP_400_BAD_REQUEST)
            
            decoded_file = file.read().decode('utf-8')
            io_string = io.StringIO(decoded_file)
            reader = csv.DictReader(io_string, delimiter=',')

            objetos = []

            for row in reader:

                sensor_mac_address = row.get('mac_address')
                sensor = DadosSensores.objects.filter(mac_address=sensor_mac_address).first()
                  
            
                if table == 'sensores':

                    tipo, created = TiposSensores.objects.get_or_create(tipo=row['tipo'])
                    mac_address = row.get('mac_address') 

                    DadosSensores.objects.create(

                        tipo=tipo,
                        mac_address=mac_address if mac_address else None,
                        latitude = float(row['latitude'].replace(',','.')),
                        longitude = float(row['longitude'].replace(',','.')),
                        localizacao=row['localizacao'],
                        responsavel= row['responsavel'] if row['responsavel'] else '',
                        unidade_medida=row['unidade_medida'] if row['unidade_medida'] else None,
                        status_operacional=True if row['status_operacional'] == 'True' else False,
                        observacao=row['observacao'] if row['observacao'] else '',
                    )
                
                    print('Dados da tabela tipo inserido com sucesso!')
       
                elif table == 'temperatura':

                    TemperaturaData.objects.create(
                        sensor=sensor,
                        valor=float(row['valor'].replace(',', '.')),  # Supondo que 'valor' está no CSV
                        timestamp=row['timestamp'] 
                    )
                
                elif table == 'umidade':

                    UmidadeData.objects.create(
                        sensor=sensor,
                        valor=float(row['valor'].replace(',', '.')),  # Supondo que 'valor' está no CSV
                        timestamp=row['timestamp'] 
                    )
                
                elif table == 'luminosidade':
                    LuminosidadeData.objects.create(
                        sensor=sensor,
                        valor=float(row['valor'].replace(',', '.')),  # Supondo que 'valor' está no CSV
                        timestamp=row['timestamp'] 
                    )

                
                elif table == 'contador':
                    ContadorData.objects.create(
                    sensor=sensor,
                    timestamp=row['timestamp']
                    )
            return Response({"message": "CSV file processed successfully"}, status=status.HTTP_200_OK)
            
        return Response({'message': "deu ruim"}, status=status.HTTP_400_BAD_REQUEST)
    
# api temperatura 
class TemperaturaDataViewSet(viewsets.ModelViewSet):
    queryset = TemperaturaData.objects.all()
    serializer_class = serializers.TemperaturaDataSerializer
    permission_classes = [permissions.IsAuthenticated]

    filter_backends = [DjangoFilterBackend]
    filterset_class = TemperaturaDataFilter

class UmidadeDataViewSet(viewsets.ModelViewSet):
    queryset = UmidadeData.objects.all()
    serializer_class = serializers.UmidadeDataSerializer
    permission_classes = [permissions.IsAuthenticated]
    
class LuminosidadeDataViewSet(viewsets.ModelViewSet):
    queryset = LuminosidadeData.objects.all()
    serializer_class = serializers.LuminosidadeDataSerializer
    permission_classes = [permissions.IsAuthenticated]

class ContadorDataViewSet(viewsets.ModelViewSet):
    queryset = ContadorData.objects.all()
    serializer_class = serializers.ContadorDataSerializer
    permission_classes = [permissions.IsAuthenticated]

# POST 
class AdicionarSensor(APIView):
    def post(self,request):
        table = request.data.get('table')
        print(request.data, 'data')
        if table == 'sensores':

            data = request.data.get('inputs')
            print(data)

            serializers = SensorSerializer(data=data)

            if serializers.is_valid():
                novo_dado = serializers.save()
                return Response(status=status.HTTP_201_CREATED)
        
        return Response(status=status.HTTP_400_BAD_REQUEST)
    