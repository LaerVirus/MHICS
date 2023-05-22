using System.Collections.Generic;
using System.Threading.Tasks;

namespace SVChVS_Lab_12.Services
{
    public interface IServiceBase<T> where T : class
    {
        Task<T> Get(string ID);
        Task<List<T>> GetAll();
        Task<T> Create(T entity);
        Task<T> Update(T entity);
        Task Delete(string ID);
    }
}
