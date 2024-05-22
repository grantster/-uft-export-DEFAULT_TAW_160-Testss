' Logout
AIUtil.SetContext Browser("creationtime:=3")
AIUtil("profile").Click
'AIUtil("button", "").Click
AIUtil.FindTextBlock("Sign Out").Click
AIUtil.FindTextBlock("OK").Click
