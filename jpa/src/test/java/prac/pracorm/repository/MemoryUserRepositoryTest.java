package prac.pracorm.repository;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import prac.pracorm.domain.User;

import java.util.List;

import static org.assertj.core.api.Assertions.*;

class MemoryUserRepositoryTest {

    MemoryUserRepository repository = new MemoryUserRepository();

    @AfterEach
    public void afterEach() {
        repository.clearStore();
    }

    @Test
    public void save() {
        User user = new User();
        user.setName("user");

        repository.save(user);

        User result = repository.findById(user.getId()).get();
        assertThat(user).isEqualTo(result);
    }

    @Test
    public void findByName() {
        User user1 = new User();
        user1.setName("user1");
        repository.save(user1);

        User user2 = new User();
        user2.setName("user2");
        repository.save(user2);


        User result1 = repository.findByName("user1").get();
        assertThat(result1).isEqualTo(user1);

        User result2 = repository.findByName("user2").get();
        assertThat(result2).isEqualTo(user2);
    }

    @Test
    public void findAll() {
        User user1 = new User();
        user1.setName("user1");
        repository.save(user1);

        User user2 = new User();
        user2.setName("user2");
        repository.save(user2);

        List<User> result = repository.findAll();

        assertThat(result.size()).isEqualTo(2);
    }
}
