using AutoMapper;
using Domaine;

namespace Application.Core
{
    public class MappingProfilers:Profile
    {
        public MappingProfilers()
        {
            CreateMap<Activity,Activity>();
        }
    }
}