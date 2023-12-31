package com.ssafy.hotstock.domain.keywordsummary.service;

import com.ssafy.hotstock.domain.keywordsummary.domain.KeywordCountLog;
import com.ssafy.hotstock.domain.keywordsummary.dto.KeywordSubCountResponseDto;
import com.ssafy.hotstock.domain.news.dto.NewsResponseDto;
import java.util.List;

public interface KeywordCountLogService {
    List<KeywordCountLog> getKeywordCountLogByCheckPointId(Long checkPointId);

    // 현웅이 파이썬 서버에서 받은 response로 List<KeywordResponseDto> -> 우리 엔티티에 저장하는 로직
    void insertKeywordList(List<KeywordSubCountResponseDto> keywordSubCountResponseDtoList);

    // 파이썬 서버에 뉴스기사 request -> response로 List<String[keyword, theme]> 받아옴
    List<KeywordSubCountResponseDto> fetchKeywords(List<NewsResponseDto> newsResponseDtoList);
}
