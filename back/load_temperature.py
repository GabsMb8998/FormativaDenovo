import csv
from datetime import datetime
from dateutil import parser
import pytz
import os
import django

# Configuração do Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'smart_city.settings')
django.setup()
from app_smart.models import TemperaturaData, DadosSensores


def load_temperature_data(csv_file_path):
    print("Início da importação:", datetime.now().strftime('%Y-%m-%d %H:%M:%S'))

    with open(csv_file_path, newline='', encoding='utf-8') as csvfile:

        reader = csv.DictReader(csvfile)
        print(csvfile)
        line_count = 0
    
        for row in reader:
            
            valor = float(row['valor'])
            sensor_id = int(row['sensor_id'])
            timestamp = parser.parse(row['timestamp']) # Usa dateutil para 

            # analisar a data com fuso horário
            sensor = DadosSensores.objects.get(id=sensor_id)

            TemperaturaData.objects.create(sensor=sensor, valor=valor, 
            timestamp=timestamp)
            line_count += 1
        
            if line_count % 10000 == 0:
                print(f"{line_count} linhas processadas...")
                print("Fim da importação:", datetime.now().strftime('%Y-%m-%d %H:%M:%S'))
                print(f"Dados carregados com sucesso de {csv_file_path}")


# Chame a função para carregar os dados do arquivo CSV
load_temperature_data('dados/temperatura_data_final.csv')