package com.bang_ggood.checklist.domain;

import com.bang_ggood.room.domain.Room;
import com.bang_ggood.user.domain.User;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import java.util.Objects;

@Entity
public class Checklist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(nullable = false)
    private User user;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(nullable = false)
    private Room room;

    private Integer deposit;

    private Integer rent;

    private Integer contractTerm;

    private String realEstate;

    protected Checklist() {
    }

    public Long getId() {
        return id;
    }

    public User getUser() {
        return user;
    }

    public Room getRoom() {
        return room;
    }

    public Integer getDeposit() {
        return deposit;
    }

    public Integer getRent() {
        return rent;
    }

    public Integer getContractTerm() {
        return contractTerm;
    }

    public String getRealEstate() {
        return realEstate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Checklist checklist = (Checklist) o;
        return Objects.equals(id, checklist.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Checklist{" +
                "id=" + id +
                ", user=" + user +
                ", room=" + room +
                ", deposit=" + deposit +
                ", rent=" + rent +
                ", contractTerm=" + contractTerm +
                ", realEstate='" + realEstate + '\'' +
                '}';
    }
}
