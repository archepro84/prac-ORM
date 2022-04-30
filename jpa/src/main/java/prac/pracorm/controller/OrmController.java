package prac.pracorm.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class OrmController {

    @GetMapping("orm-api")
    @ResponseBody
    public ORM ormApi(@RequestParam("name") String name) {
        ORM orm = new ORM();
        orm.setName(name);
        return orm;
    }

    static class ORM {
        private String name;
        private int age;

        public int getAge() {
            return age;
        }

        public void setAge(int age) {
            this.age = age;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }
    }
}
