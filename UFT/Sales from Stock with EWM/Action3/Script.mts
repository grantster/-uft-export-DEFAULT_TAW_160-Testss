AIUtil.SetContext Browser("creationtime:=3")
'Login if needed
'AIUtil("text_box", "User").Type "S4H_SD_DEM"
'AIUtil("text_box", "Password").Type "Welcome1"
'AIUtil.FindTextBlock("Log On").Click
'
' Open Sales Quotations

AIUtil.FindTextBlock("My Sales Overview").Click
AIUtil.FindTextBlock("Open Sales Quotations").Click
'Modfy nex line to pick up Quote using regex
AIUtil("radio_button", "20001949").SetState "On"

AIUtil.FindTextBlock("Create Subsequent Order").Click
AIUtil("down_triangle", micAnyText, micFromLeft, 5).Click
'AIUtil("down_triangle", micAnyText, micFromLeft, 4).Clic
AIUtil.FindTextBlock("Standard order (JOR)").Click
AIUtil("button", "OK").Click

AIUtil("text_box", "Cust. Reference:").Type "123123213123"
AIUtil("text_box", "Cust. Ref. Date:").Click
AIUtil("copy").Click
'AIUtil("down_triangle", micAnyText, micFromTop, 2).Click
'AIUtil.FindTextBlock("May").Click
'AIUtil.FindTextBlock("1").Click
AIUtil.FindTextBlock("Choose").Click
AIUtil.SetContext Browser("creationtime:=0")

AIUtil("button", "", micFromLeft, 9).Click
AIUtil.FindTextBlock("Shipping").Click
AIUtil("text_box", "Stor. Loc CL").Type "171S"
AIUtil("text_box", "Delivery Prior: 2").SetText "1"
'AIUtil("text_box", "Stor. Loc CL").Type "171S"
AIUtil.FindTextBlock("Save").Click
'edit next step with regex
'AIUtil.FindTextBlock("Standard order 4589 has been saved").CheckExists True
AIUtil.FindTextBlock(AIRegex("Standard order \d+ has been saved")).CheckExists(True)
'add save for quote number
Set OrderNumber = AIUtil.FindTextBlock(AIRegex("Standard order \d+ has been saved"))

AIUtil.FindTextBlock("Exit").Click
AIUtil("down_triangle", micAnyText, micFromLeft, 3).Click
AIUtil.FindTextBlock("Home").Click

