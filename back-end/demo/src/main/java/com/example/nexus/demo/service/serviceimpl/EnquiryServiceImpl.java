package com.example.nexus.demo.service.serviceimpl;

import java.util.List;
import java.util.ArrayList;

import org.springframework.stereotype.Service;

import com.example.nexus.demo.dto.EnquiryDTO;
import com.example.nexus.demo.mapper.EnquiryMapper;
import com.example.nexus.demo.model.Enquiry;
import com.example.nexus.demo.repository.EnquiryRepository;
import com.example.nexus.demo.service.EnquiryServices;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class EnquiryServiceImpl implements EnquiryServices{
    private EnquiryRepository er;
    public EnquiryDTO addEnquiry(EnquiryDTO e){
        Enquiry q=EnquiryMapper.maptoEnquiry(e);
        q.setEnqStatus(false);
        q.setEnqReply("");
        q.setReplyDate(null);
        Enquiry t=er.save(q);
        return EnquiryMapper.maptoEnquiryDTO(t);
    }
    
    public EnquiryDTO replyEnquiry(EnquiryDTO e){
        Enquiry k=EnquiryMapper.maptoEnquiry(e);
        Enquiry answer=er.findById(k.getId()).orElse(null);
        answer.setEnqStatus(true);
        answer.setEnqReply(k.getEnqReply());
        answer.setReplyDate(k.getReplyDate());
        Enquiry t=er.save(answer);
        return EnquiryMapper.maptoEnquiryDTO(t);
    }
    public List<EnquiryDTO> allEnquiries(){
        List<Enquiry> a=er.findAll();
        List<EnquiryDTO> answer=new ArrayList<>();
        for(Enquiry t:a){
            answer.add(EnquiryMapper.maptoEnquiryDTO(t));
        }
        return answer;
    }

}
