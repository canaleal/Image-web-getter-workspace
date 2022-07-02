using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GeneralImage.Data.Interface;
using GeneralImage.Data.Model;
using GeneralImage.Data.Repository;

namespace ImagePostgresAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GeneralImageController : ControllerBase
    {
        private IGeneralImages generalImages = new GeneralImagesRepository();

        [HttpGet]
        public ActionResult<IEnumerable<GelbooruImage>> GetAllGeneralImages()
        {
            return generalImages.GetAllGeneralImages();
        }
        [HttpGet("{id}")]
        public ActionResult<GelbooruImage> GetGeneralImageById(int id)
        {
            return generalImages.GetGeneralImage(id);
        }
    }
}
