using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GeneralImage.Data.Interface;
using GeneralImage.Data.Model;

namespace GeneralImage.Data.Repository
{
    public class GeneralImagesRepository : IGeneralImages
    {
        List<GelbooruImage> generalImages = new List<GelbooruImage>
        {
            new GelbooruImage{Id=1, Container_link="Kirtesh", Image_link="Shah", Created_at="Vadodara", Name="Test" },
          
        };


        public List<GelbooruImage> GetAllGeneralImages()
        {
            return generalImages;
        }

        public GelbooruImage GetGeneralImage(int id)
        {
            return generalImages.FirstOrDefault(x => x.Id == id);
        }
    }
}
