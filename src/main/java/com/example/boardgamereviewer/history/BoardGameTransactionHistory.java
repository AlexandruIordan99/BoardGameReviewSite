package com.example.boardgamereviewer.history;

import com.example.boardgamereviewer.boardGame.BoardGame;
import com.example.boardgamereviewer.common.BaseEntity;
import com.example.boardgamereviewer.user.User;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

@Getter
@Setter
@SuperBuilder //need a super builder for inheritance
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class BoardGameTransactionHistory extends BaseEntity {

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name="boardGame_id")
    private BoardGame boardGame;

    private boolean shared;
    private boolean sharedApproved;


}
