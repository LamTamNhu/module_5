package com.test_5_webapi.repository;

import com.test_5_webapi.model.ItemType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemTypeRepository extends JpaRepository<ItemType,Long> {
}
