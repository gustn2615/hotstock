package com.ssafy.hotstock.domain.keywordsummary.service;

import com.ssafy.hotstock.domain.keywordsummary.domain.KeywordCountLog;
import com.ssafy.hotstock.domain.keywordsummary.repository.KeywordCountLogRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@RequiredArgsConstructor
@Service
public class KeywordCountLogServiceImpl implements KeywordCountLogService{

    private final KeywordCountLogRepository keywordCountLogRepository;
    @Override
    public List<KeywordCountLog> getKeywordCountLogByCheckPointId(Long checkPointId) {
        return keywordCountLogRepository.findByKeywordCheckPointId(checkPointId);
    }

    @Override
    public void insertKeywordCountLog(KeywordCountLog keywordCountLog) {
        keywordCountLogRepository.save(keywordCountLog);
    }
}