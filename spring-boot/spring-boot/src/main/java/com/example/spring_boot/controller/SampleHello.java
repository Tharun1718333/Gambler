package com.example.spring_boot.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class SampleHello {

    @RequestMapping("/GetHello")
    @ResponseBody
    public String requestMethodName() {
        return "Hello from Tharun18";
    }
}
