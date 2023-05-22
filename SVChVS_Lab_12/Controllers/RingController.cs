using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SVChVS_Lab_12.Services.RingServices;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SVChVS_Lab_12.Controllers
{
    [ApiController]
    public class RingController : ControllerBase
    {
        private readonly IRingService _ringService;

        public RingController(IRingService ringService)
        {
            _ringService = ringService;
        }

        [HttpGet]
        [Route("[controller]")]
        [ProducesResponseType(typeof(List<Ring>), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var rings = await _ringService.GetAll();

                return Ok(rings);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"{e.Message}");
            }
        }

        [HttpPost]
        [Route("[controller]/create")]
        [ProducesResponseType(typeof(Ring), StatusCodes.Status200OK)]
        public async Task<IActionResult> Create([FromBody] Ring ringForCreate)
        {
            try
            {
                if (ringForCreate is null || !ModelState.IsValid)
                {
                    return BadRequest("Модель не подходит");
                }

                var result = await _ringService.Create(ringForCreate);

                return Ok(ringForCreate);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"{e.Message}");
            }
        }

        [HttpPut]
        [Route("[controller]/update")]
        [ProducesResponseType(typeof(Ring), StatusCodes.Status200OK)]
        public async Task<IActionResult> Update([FromBody] Ring ringForUpdate)
        {
            try
            {
                if (ringForUpdate is null || !ModelState.IsValid)
                {
                    return BadRequest("Модель не подходит");
                }

                var result = await _ringService.Update(ringForUpdate);

                return Ok(result);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"{e.Message}");
            }
        }

        [HttpDelete]
        [Route("[controller]/delete")]
        [ProducesResponseType(typeof(int), StatusCodes.Status200OK)]
        public async Task<IActionResult> Delete([FromBody] string ID)
        {
            try
            {
                await _ringService.Delete(ID);

                return Ok(ID);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"{e.Message}");
            }
        }
    }
}
