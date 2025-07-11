package com.example.nutrition.controller;

import com.example.nutrition.model.FoodItem;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
public class FoodController {
    private final List<FoodItem> foodList = new ArrayList<>();

    @GetMapping("/")
    public String index(Model model) {
        model.addAttribute("foodList", foodList);
        return "index";
    }

    @PostMapping("/add")
    public String addFood(@RequestParam String name,
                          @RequestParam int quantity,
                          @RequestParam int calories) {
        foodList.add(new FoodItem(name, quantity, calories));
        return "redirect:/";
    }
}
