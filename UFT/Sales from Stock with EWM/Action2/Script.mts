''' Login
AIUtil.SetContext Browser("creationtime:=3")
'AIUtil("text_box", "User").Type "S4H_SD_DEM"
'AIUtil("text_box", "Password").Type "Welcome1"
'AIUtil.FindTextBlock("Log On").Click

' My Sales Overview
AIUtil.FindTextBlock("My Sales Overview").Click
'
wait 10
' wait a while for SAP

'Create sales quotation
AIUtil.FindTextBlock("Create Sales Quotation").Click

AIUtil("text_box", "Quotation Type:").Click
AIUtil("copy").Click
'AIUtil("combobox", "").SetText "QT"
'AIUtil("button", "", micFromLeft, 3).Click
AIUtil("radio_button", "QT").SetState "On"
AIUtil("check_mark").Click
AIUtil("text_box", "Sales Organization: 1710").Click
AIUtil("search", micAnyText, micFromBottom, 1).Click
AIUtil("radio_button", "1710").SetState "On"
AIUtil("check_mark").Click
AIUtil("text_box", "Distribution Channel").Click
AIUtil("search", micAnyText, micFromBottom, 1).Click
AIUtil("check_mark").Click
AIUtil("text_box", "Division").Click
AIUtil("search", micAnyText, micFromBottom, 1).Click
AIUtil("check_mark").Click
AIUtil("button", "Continue").Click

AIUtil.SetContext Browser("creationtime:=3")
AIUtil("text_box", "Sold-To Party").Type "EWM17-CU01"
AIUtil.FindTextBlock("EWM17-CU01").Click
AIUtil("text_box", "Ship-To Party").Type "EWM17-CU01"
AIUtil.FindTextBlock("EWM17-CU01").Click
AIUtil("text_box", "Cust. Reference:").Type "032120240232"

AIUtil.FindTextBlock("Sales").Click
'Delivery Date
AIUtil("text_box", "05/01/2024").Click
AIUtil("copy").Click
'AIUtil("button", "ri").Click
AIUtil("down_triangle", micAnyText, micFromLeft, 3).Click
AIUtil.FindTextBlock("June").Click
AIUtil.FindTextBlock("1").Click
AIUtil("check_mark").Click

'Add items
AIUtil.FindTextBlock("Item Overview").Click
AIUtil.FindTextBlock("Continue").Click

'add parts
AIUtil.SetContext Browser("creationtime:=3")

AIUtil.FindTextBlock("Item detail").Click

AIUtil("text_box", "Material").SetText "EWMS4-01"

AIUtil.FindTextBlock("SMALL PART, SLOW-MOVING ITEM").Click

AIUtil("text_box", "Order Quantity:").Type "1"
AIUtil("document", micAnyText, micFromLeft, 1).Click

AIUtil.FindTextBlock("Item Overview").Click
AIUtil("text_box", "Valid To:").Click
AIUtil("copy").Click
AIUtil("down_triangle", micAnyText, micFromLeft, 3).Click
AIUtil.FindTextBlock("June").Click
AIUtil.FindTextBlock("1").Click
AIUtil("check_mark").Click
AIUtil("button", "Save").Click
'checkpoint
AIUtil.SetContext Browser("creationtime:=3")
AIUtil.FindTextBlock(AIRegex("Quotation \d+ has been saved")).CheckExists(True)

'add save for quote number - to be debugged
'Set QuoteConfirmationMessage = AIRegex("Quotation \d+ has been saved")'
'AIUtil.FindTextBlock(QuoteConfirmationMessage).CheckExists TRUE
'AIUtil("check_mark", micAnyText, micWithAnchorOnRight, AIUtil("button", "Save")).CheckExists True
' already commented out from Dons script --- StatusBarText = AIUtil.FindTextBlock(micAnyText, micWithAnchorOnLeft, AIUtil("check_box", micAnyText, micWithAnchorOnRight, AIUtil("button", "Save"))).GetText
'StatusBarText = AIUtil.FindTextBlock(micAnyText, micWithAnchorOnLeft, AIUtil("check_mark")).GetText
'StatusBarArray = Split(StatusBarText," ")
'print "The Quote number is " & StatusBarArray(2)
'Parameter("NewQuoteNumber") = StatusBarArray(2)
'DataTable.Value("QuoteNumber") = StatusBarArray(2)
'Reporter.ReportEvent micDone, "Quote Number", "The Quote Number from the Status Bar is " & StatusBarArray(2) & "."
'QuotationNumber.Highlight
'

AIUtil.FindTextBlock("Exit").Click
wait 5
'AIUtil.SetContext Browser("creationtime:=0")
AIUtil("down_triangle", micAnyText, micFromTop, 1).Click
'wait 5
AIUtil.FindTextBlock("Home").Click

'AIUtil("left_triangle").Click
'AIUtil("left_triangle").Click
'AIUtil("left_triangle").Click

' Logout
'AIUtil.SetContext Browser("creationtime:=0")
'AIUtil.FindTextBlock("Exit").Click
'AIUtil("profile").Click
'AIUtil("profile").Click
'AIUtil("power").Click
'AIUtil.FindTextBlock("OK").Click

