import os 
import django
import csv

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'smart_city.settings')
django.setup()

from app_smart.models import TiposSensores, DadosSensores

def load_sensors_from_csv(file_path):
    
    with open(file_path, newline='', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile, delimiter=',')
        print (reader.fieldnames)

        objetos = []
        for row in reader:


            tipo, created = TiposSensores.objects.get_or_create(tipo=row['tipo'])

            DadosSensores.objects.create(

                tipo=tipo,
                mac_address=row['mac_address'] if row ['mac_address'] else None,
                latitude = float(row['latitude'].replace(',','.')),
                longitude = float(row['longitude'].replace(',','.')),
                localizacao=row['localizacao'],
                responsavel= row['responsavel'] if row['responsavel'] else '',
                unidade_medida=row['unidade_medida'] if row['unidade_medida'] else None,
                status_operacional=True if row['status_operacional'] == 'True' else False,
                observacao=row['observacao'] if row['observacao'] else '',
            )
        
            print('Dados da tabela tipo inserido com sucesso!')

if __name__ == "__main__":

    file_path = 'dados/sensor_data.csv'
    load_sensors_from_csv(file_path)