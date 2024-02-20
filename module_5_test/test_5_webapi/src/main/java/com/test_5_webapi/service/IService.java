package com.test_5_webapi.service;

import com.test_5_webapi.model.Item;
import com.test_5_webapi.model.ItemType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IService {
    Page<Item> findAll(Pageable pageable);

    Item findById(Long id);

    void save(Item item);

    List<ItemType> getTypes();

    Page<Item> findAllByName(String name, Pageable pageable);

    void deleteById(Long id);
}
