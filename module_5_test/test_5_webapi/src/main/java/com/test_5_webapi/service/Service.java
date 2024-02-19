package com.test_5_webapi.service;

import com.test_5_webapi.model.Item;
import com.test_5_webapi.model.ItemType;
import com.test_5_webapi.repository.ItemTypeRepository;
import com.test_5_webapi.repository.Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

@org.springframework.stereotype.Service
public class Service implements IService {
    @Autowired
    Repo repo;
    @Autowired
    ItemTypeRepository itemTypeRepository;

    @Override
    public Page<Item> findAll(Pageable pageable) {
        return repo.findAll(pageable);
    }

    @Override
    public Item findById(Long id) {
        return repo.findById(id).orElse(null);
    }

    @Override
    public void save(Item item) {
        repo.save(item);
    }

    @Override
    public List<ItemType> getTypes() {
        return itemTypeRepository.findAll();
    }
}
