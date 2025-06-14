package com.example.demo.controller;

import com.example.demo.model.About;
import com.example.demo.repository.AboutRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/about")
@CrossOrigin("*")
public class AboutController {

    @Autowired
    private AboutRepository aboutRepository;

    @GetMapping
    public List<About> getAboutContent() {
        return aboutRepository.findAll();
    }

    @PostMapping
    public About createAboutContent(@RequestBody About about) {
        return aboutRepository.save(about);
    }
}
