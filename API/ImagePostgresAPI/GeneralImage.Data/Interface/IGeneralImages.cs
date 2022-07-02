using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GeneralImage.Data.Model;

namespace GeneralImage.Data.Interface
{
    public interface IGeneralImages
    {
        List<GelbooruImage> GetAllGeneralImages();
        GelbooruImage GetGeneralImage(int id);
    }
}
