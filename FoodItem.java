package com.example.nutrition.model;

public class FoodItem {
    private String name;
    private int quantity; // 単位はgなど
    private int calories;

    public FoodItem(String name, int quantity, int calories) {
        this.name = name;
        this.quantity = quantity;
        this.calories = calories;
    }

    // ゲッターとセッター
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public int getQuantity() { return quantity; }
    public void setQuantity(int quantity) { this.quantity = quantity; }

    public int getCalories() { return calories; }
    public void setCalories(int calories) { this.calories = calories; }
}
