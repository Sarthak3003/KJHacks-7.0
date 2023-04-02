from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('account/', include('accounts.urls')),
    path('api/',include('testapp.urls')),
    path('news/',include('newsandpolicis.urls')),
    path('marketplace/',include('marketplace.urls')),
    path("schema/", SpectacularAPIView.as_view(), name="schema"),
    path(
        "docs/",
        SpectacularSwaggerView.as_view(url_name="schema"
        ),
        name="swagger-ui",
    ),
    path('banking/', include('banking.urls')),
    path('cibil/', include('cibil.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
