from django.urls import path, include
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from app_smart.api.viewsets import (
    CreateUserAPIViewSet,
    SensorViewSet,
    CvsUploadView,
    TemperaturaDataViewSet,
    UmidadeDataViewSet,
    LuminosidadeDataViewSet,
    ContadorDataViewSet,
    TemperaturaView,
    LuminosidadeView,
    ContadorView,
    UmidadeView,
    SensoresView,
    UpdateSensoresView,
    TotalSensoresView,
    AdicionarSensor
    )
from rest_framework.routers import DefaultRouter
from app_smart.api.filters import (
    SensorFilterView,
    TemperaturaFilterView, 
    UmidadeFilterView, 
    LuminosidadeFilterView,
    ContadorFilterView
)


router = DefaultRouter()
router.register(r'sensores', SensorViewSet)
router.register(r'temperatura', TemperaturaDataViewSet)
router.register(r'umidade', UmidadeDataViewSet)
router.register(r'luminosidade', LuminosidadeDataViewSet)
router.register(r'contador', ContadorDataViewSet)


urlpatterns = [
    path('api/create_user/', CreateUserAPIViewSet.as_view(), name = 'create_user'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_par'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/', include(router.urls)),
    path('api/sensor_filter/', SensorFilterView.as_view(), name='sensor_filter'),
    path('api/uploads/', CvsUploadView().as_view()),
    path('api/temperatura_filter/', TemperaturaFilterView.as_view(), name='temperatura_filter'),
    path('api/umidade_filter/', UmidadeFilterView.as_view(), name='umidade_filter'),
    path('api/luminosidade_filter/', LuminosidadeFilterView.as_view(), name='luminosidade_filter'),
    path('api/contador_filter/', ContadorFilterView.as_view(), name='contador_filter'),
    path('api/temperatura/', TemperaturaView.as_view()),
    path('api/luminosidade/', LuminosidadeView.as_view()),
    path('api/contador/', ContadorView.as_view()),
    path('api/umidade/', UmidadeView.as_view()),
    path('api/sensores/', SensoresView.as_view()),
    path('api/update/', UpdateSensoresView.as_view()),
    path('api/total/', TotalSensoresView.as_view()),
    path('api/adicionar/', AdicionarSensor.as_view()),
]
