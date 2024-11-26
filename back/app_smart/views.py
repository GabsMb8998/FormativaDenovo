from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from app_smart.models import TiposSensores, DadosSensores
# from smart_city.app_smart.api.serializers import CsvSerializer
import os 
import django
import csv
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.response import Response
from rest_framework import status
import io

# Create your views here.

# class csvUploadsView(api_view):
#     def uploads(request):

#         serializer = CsvSerializer(data=request.data)

#         if serializer.is_valid():
#             file = request.FILES['file']
#             if not file.name.endswith('.scsv'):
#                 return Response({"error": "Extensao do arquivo diferente de csv"}, status=status.HTTP_400_BAD_REQUEST)
    



#     # os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'smart_city.settings')
#     # django.setup()
#         decoded_file = file.read().decode('utf-8')
#         io_string = io.StringIO(decoded_file)
#         reader = csv.DictReader(io_string, delimiter=',')
#         print (reader.fieldnames)

#         objetos = []
#         for row in reader:

#             tipo, created = TiposSensores.objects.get_or_create(tipo=row['tipo'])

#             DadosSensores.objects.create(

#                 tipo=tipo,
#                 mac_address=row['mac_address'] if row ['mac_address'] else None,
#                 latitude = float(row['latitude'].replace(',','.')),
#                 longitude = float(row['longitude'].replace(',','.')),
#                 localizacao=row['localizacao'],
#                 responsavel= row['responsavel'] if row['responsavel'] else '',
#                 unidade_medida=row['unidade_medida'] if row['unidade_medida'] else None,
#                 status_operacional=True if row['status_operacional'] == 'True' else False,
#                 observacao=row['observacao'] if row['observacao'] else '',
#             )
        
#             print('Dados da tabela tipo inserido com sucesso!')

#             return Response({"message": "CSV file processed successfully"}, status=status.HTTP_200_OK)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)