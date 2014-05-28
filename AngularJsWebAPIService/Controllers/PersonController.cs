using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http;
using System.Web.Http;
using AngularJsWebAPIService.Models;

namespace AngularJsWebAPIService.Controllers
{
    public class PersonController : ApiController
    {
        List<Person> Persons = new List<Person>();
        // GET api/person
        public IEnumerable<Person> Get()
        {
            Persons.Add(new Person()
            {
                PersonId = 1,
                Name = "Shahriar Hyder",
                Designation = "CTO"
            });
            Persons.Add(new Person()
            {
                PersonId = 2,
                Name = "Fiyaz",
                Designation = "Software Engineer"
            });
            Persons.Add(new Person()
            {
                PersonId = 3,
                Name = "Demo Data",
                Designation = "Demo Data"
            });
            return Persons;
        }

        // GET api/person/5
        public string Get(int id)
        {
            return "value";
        }

        [HttpPost]
        public void Post([FromBody]Person person)
        {
            Persons.Add(person);
        }

        // PUT api/person/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/person/5
        public void Delete(int id)
        {
        }
    }
}
