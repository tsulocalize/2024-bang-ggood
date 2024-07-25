package com.bang_ggood.category.dto;

import com.bang_ggood.checklist.dto.QuestionResponse;
import java.util.List;

public record CategoryQuestionsResponse(Integer id, String categoryName, List<QuestionResponse> questions) {
}
