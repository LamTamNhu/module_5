package com.test_5_webapi.controller;

import com.test_5_webapi.model.Item;
import com.test_5_webapi.model.ItemType;
import com.test_5_webapi.service.IService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api")

public class Controller {
    @Autowired
    IService service;

    @GetMapping("/items")
    public ResponseEntity<Page<Item>> getAll(@PageableDefault(sort = "amount", direction = Sort.Direction.ASC) Pageable pageable,
                                             @RequestParam("name") @Nullable String name) {
        System.out.println(pageable);
        Page<Item> items;
        if (name != null) {
            items = service.findAllByName(name,pageable);
        } else {
            items = service.findAll(pageable);
        }
        System.out.println(items);
        return new ResponseEntity<>(items, HttpStatus.OK);
    }

    @GetMapping("/items/{id}")
    public ResponseEntity<Item> findById(@PathVariable Long id) {
        System.out.println("Finding id: " + id);
        Item item = service.findById(id);
        return new ResponseEntity<>(item, HttpStatus.OK);
    }

    @PatchMapping("/items/add")
    public ResponseEntity<?> saveItem(@RequestBody Item item) {
        System.out.println(item.toString());
        service.save(item);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @GetMapping("/types")
    public ResponseEntity<List<ItemType>> getTypes() {
        return new ResponseEntity<>(service.getTypes(), HttpStatus.OK);
    }

}
