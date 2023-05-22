using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SVChVS_Lab_12.Services.RingServices
{
    public class RingService : IRingService
    {
        private readonly ApplicationContext courseProjectContext;

        public RingService(ApplicationContext courseProjectContext)
        {
            this.courseProjectContext = courseProjectContext;
        }

        public async Task<Ring> Create(Ring entity)
        {
            entity.ID = Guid.NewGuid().ToString();

            await courseProjectContext.Rings.AddAsync(entity);

            await courseProjectContext.SaveChangesAsync();

            return entity;
        }

        public async Task Delete(string ID)
        {
            courseProjectContext.Rings.Remove(await Get(ID));

            await courseProjectContext.SaveChangesAsync();
        }

        public async Task<Ring> Get(string name)
        {
            return await courseProjectContext.Rings.FirstOrDefaultAsync(_ => _.Name == name);
        }

        public async Task<List<Ring>> GetAll()
        {
            return await courseProjectContext.Rings
                .OrderBy(_ => _.Price)
                .ToListAsync();
        }

        public async Task<Ring> Update(Ring entity)
        {
            await Delete(entity.Name);

            await Create(entity);

            return entity;
        }
    }
}
