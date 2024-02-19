package com.test_5_webapi.repository;

import com.test_5_webapi.model.Item;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Repo extends JpaRepository<Item, Long> {
}
