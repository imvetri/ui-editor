Login_component Empty_variant

    I expect to see Email_input_element Empty_variant
    I expect to see Password_input_element Empty_variant
    I expect to see Forgot_password_link_element Not_clicked_variant
    I expect to see Submit_button_element Enabled_variant
    I expect to see Cancel_button_element Enabled_variant

When I enter valid user details I expect to see 
    
    Login_component valid_variant

        I expect to see Email_input_element Valid_variant
        I expect to see Password_input_element Valid_variant
        I expect to see Forgot_password_link_element Not_clicked_variant
        I expect to see Submit_button_element Enabled_variant
        I expect to see Cancel_button_element Enabled_variant

When I enter invalid user details I expect to see 

    Login_component In_valid_variant

        I expect to see Email_input_element Invalid_variant
        I expect to see Password_input_element valid_variant
        I expect to see Forgot_password_link_element Not_clicked_variant
        I expect to see Submit_button_element Disabled_variant
        I expect to see Cancel_button_element Enabled_variant