<h2> App still "work in progress" and is to be refactored soon. </h2>

<h3>This app aims to:</h3>
<ul>
	<li>Help restaurant staff to manage the costumer traffic</li>
	<li>Help the waiters to take and deliver the orders to the kitchen</li>
	<li>Automatically calculate costumer consummation</li>
	<li>Store costumer registration for future visits</li>
</ul>
		


Using: 
<ul>
	<li>Frontend:
		<ul>
			<li>React</li>
			<li>React Router V6</li>
		</ul>
	</li>
</ul>
<ul>	
	<li>Backend:
		<ul>
			<li>Express</li>
			<li>Postgres</li>
			<li>pg-promise</li>
		</ul>
	</li>
</ul>
<ul>
	<li>Database:
		<ul>
			<li>Postgres</li>
		</ul>
	</li>
	
</ul>
<ul>
	<li>To implement:
		<ul>
			<li>SASS</li>
			<li>CSS Modules</li>
		</ul>
	</li>	
</ul>		

<h3>ToDos:</h3>
<ul>
	<li>Add the order system</li>
	<li>Evaluate the possibility of changing the fetch method (the code fetches the server every 1000ms to detect changes on the database, the objective is to only 		fetch once something new is added)</li>
	<li>Add security (login system with session id)</li>
	<li>Change the cosmetics</li>
	<li>Add RFID support</li>
	<li>Full refactor of the code for better readability</li>
	<li>Project structure</li>
</ul>
		

<h2>Images</h2>

<ins>Home Page</ins>

![small Home](https://user-images.githubusercontent.com/65919238/174212140-c0af7086-99b0-440b-bf3d-a25d4007431a.png)

<ins>Kitchen</ins>

<img src="https://user-images.githubusercontent.com/65919238/174212313-2d44a020-5479-44d0-9be5-33f4b71b1a78.png" width="80%" />

<ins>Cashier</ins>

<img src="https://user-images.githubusercontent.com/65919238/174211643-77162321-0fc4-48f1-9bff-11eec68220bc.png" width="80%" />

<ins>Buttons</ins>

![checkin2](https://user-images.githubusercontent.com/65919238/174211922-be9f9302-0d40-43aa-8084-43e5adfc3bea.png)
![checkout](https://user-images.githubusercontent.com/65919238/174211927-60d0f06c-86ea-4ff4-818f-735e0162f3c7.png)

	


	
	
	
	
	
	

<h3>(in construction)</h3>

```
Docs

Modules:

FloatingBtn
	Takes the arguments: title -> What will appear on the button
				   to -> Redirects to a react router route
				   (Requires react route v6*)

FloatingBtnFunctional
	Takes the argument: title -> What will appear on the button
				  onClickFuntion -> The function that will be excuted when the button gets pressed
				  Ex.: 
					  onClickFunction={ ()=>fetch(`http://192.168.0.8:3000/deluser`); }}
```


