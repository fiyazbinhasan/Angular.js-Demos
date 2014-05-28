using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Runtime.InteropServices.ComTypes;
using System.Web.Http;
using AngularJsWebAPIService.Models;

namespace AngularJsWebAPIService.Controllers
{
    public class ValuesController : ApiController
    {
        private List<Person> persons = new List<Person>();
        // GET api/values
        public IEnumerable<Person> Get()
        {
            persons.Add(new Person()
            {
                PersonId = 1,
                    Name = "Fizz",
                    Designation = "Soft"
            });
             persons.Add(new Person()
            {
                PersonId = 2, 
                    Name = "Nell", 
                    Designation = "Hasan"
            });
            persons.Add(new Person()
            {
                PersonId = 1,
                Name = "Fizz",
                Designation = "Soft"
            });
            return persons;
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post(Person person)
        {

        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
