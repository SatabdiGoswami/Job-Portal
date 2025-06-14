package com.example.demo.controller;

import com.example.demo.model.Home;
import com.example.demo.repository.HomeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/home")
@CrossOrigin("*")
public class HomeController {

    @Autowired
    private HomeRepository homeRepository;

    @GetMapping
    public List<Home> getHomeContent() {
        return homeRepository.findAll();
    }

    @PostMapping
    public Home createHomeContent(@RequestBody Home home) {
        return homeRepository.save(home);
    }
}
