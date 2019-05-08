### hw1交作業
1. 指定路徑  
	cd D:\001GitPJ\mentor-program-3rd-imemma\homeworks\week1  
2. 建立 branch  
	git branch hw1  
3. 切換到 hw1 branch  
	git chechkout hw1  
	[ 補充 ]可同時建立 branch，並切換到 branch  
		git checkout -b hw1   
4. 修改後做狀態確認  
	git status  
5. 每次做完都要做 add
	git add <檔案名>
6.	commit  
	git commit -am "finshined hw1"  
7. 推上 Github 
	git push origin hw1  
8. 去 Github 請求 pull reguest  
	reviewer 設為 huli or @huli  
9. 至 [改作業的地方][https://github.com/Lidemy/homeworks-3rd]  開issue老師才會改作業
10. 等改完作業，切回 master
	git master 
11.	下載遠端資料更新
	git pull origin master
12. 刪除branch 
	git branch -d hw1  

若有錯誤需要修改再重回步驟2	
	
	