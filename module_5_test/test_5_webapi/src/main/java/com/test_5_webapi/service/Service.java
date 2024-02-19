package com.test_5_webapi.service;

import com.test_5_webapi.model.Item;
import com.test_5_webapi.model.ItemType;
import com.test_5_webapi.repository.ItemTypeRepository;
import com.test_5_webapi.repository.IRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

@org.springframework.stereotype.Service
public class Service implements IService {
    @Autowired
    IRepo itemRepo;
    @Autowired
    ItemTypeRepository itemTypeRepository;

    @Override
    public Page<Item> findAll(Pageable pageable) {
        return itemRepo.findAll(pageable);
    }

    @Override
    public Item findById(Long id) {
        return itemRepo.findById(id).orElse(null);
    }

    @Override
    public void save(Item item) {
        itemRepo.save(item);
    }

    @Override
    public List<ItemType> getTypes() {
        return itemTypeRepository.findAll();
    }

    @Override
    public Page<Item> findAllByName(String name, Pageable pageable) {
        return itemRepo.findAllByNameContaining(name,pageable);
    }
}
