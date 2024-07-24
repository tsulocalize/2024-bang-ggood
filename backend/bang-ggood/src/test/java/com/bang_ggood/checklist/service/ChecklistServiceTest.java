package com.bang_ggood.checklist.service;


import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import com.bang_ggood.IntegrationTestSupport;
import com.bang_ggood.checklist.ChecklistFixture;
import com.bang_ggood.exception.BangggoodException;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

class ChecklistServiceTest extends IntegrationTestSupport {

    @Autowired
    private ChecklistService checklistService;

    @DisplayName("체크리스트 방 정보 작성 성공")
    @Test
    void createChecklist() {
        //given & when
        long checklistId = checklistService.createChecklist(ChecklistFixture.CHECKLIST_CREATE_REQUEST);

        //then
        assertThat(checklistId).isEqualTo(1);
    }

    @DisplayName("체크리스트 방 정보 작성 실패: 질문 id가 유효하지 않을 경우")
    @Test
    void createChecklist_invalidQuestionId_exception() {
        //given & when & then
        assertThatThrownBy(
                        () -> checklistService.createChecklist(ChecklistFixture.CHECKLIST_CREATE_REQUEST_INVALID_QUESTION_ID))
                .isInstanceOf(BangggoodException.class)
                .hasMessage("잘못된 질문 ID입니다.");
    }

    @DisplayName("체크리스트 방 정보 작성 실패: 질문 id가 중복일 경우")
    @Test
    void createChecklist_duplicatedQuestionId_exception() {
        //given & when & then
        assertThatThrownBy(
                () -> checklistService.createChecklist(ChecklistFixture.CHECKLIST_CREATE_REQUEST_DUPLICATED_QUESTION_ID))
                .isInstanceOf(BangggoodException.class)
                .hasMessage("중복된 질문이 존재합니다.");
    }

    @DisplayName("체크리스트 방 정보 작성 실패: 옵션 id가 유효하지 않을 경우")
    @Test
    void createChecklist_invalidOptionId_exception() {
        //given & when & then
        assertThatThrownBy(
                () -> checklistService.createChecklist(ChecklistFixture.CHECKLIST_CREATE_REQUEST_INVALID_OPTION_ID))
                .isInstanceOf(BangggoodException.class)
                .hasMessage("잘못된 옵션 ID입니다.");
    }

    @DisplayName("체크리스트 방 정보 작성 실패: 옵션 id가 중복일 경우")
    @Test
    void createChecklist_duplicatedOptionId_exception() {
        //given & when & then
        assertThatThrownBy(
                () -> checklistService.createChecklist(ChecklistFixture.CHECKLIST_CREATE_REQUEST_DUPLICATED_OPTION_ID))
                .isInstanceOf(BangggoodException.class)
                .hasMessage("중복된 옵션이 존재합니다.");
    }
}
