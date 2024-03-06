package com.example.nexus.demo.service;

import java.util.List;

import com.example.nexus.demo.dto.EnquiryDTO;

public interface EnquiryServices {
    EnquiryDTO addEnquiry(EnquiryDTO e);
    EnquiryDTO replyEnquiry(EnquiryDTO e);
    List<EnquiryDTO> allEnquiries();
}
