using Microsoft.Extensions.DependencyInjection;
using SVChVS_Lab_12.Services.RingServices;

namespace SVChVS_Lab_12
{
    public static class DependenciesRegistrator
    {
        public static void Registrate(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddScoped<IRingService, RingService>();
        }
    }
}
