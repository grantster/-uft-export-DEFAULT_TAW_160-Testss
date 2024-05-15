''' Login
AIUtil.SetContext Browser("creationtime:=3")
AIUtil("text_box", "User").Type "S4H_SD_DEM"
AIUtil("text_box", "Password").Type "Welcome1"
AIUtil.FindTextBlock("Log On").Click
