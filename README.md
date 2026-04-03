1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   
ans: when we need to get element by id js dom method then we can use getElementById and when we need element by which sharing same 
     class name then we can use getElementsByClassName. now in case querySelector / querySelectorAll can use when need element by css selector
     
2. How do you create and insert a new element into the DOM?

ans: first we need get section where we want to the create element by using getElementById method. we need to use createElement method
     for creating element after creating we need to use appenchild method to show new element to visible on Ui
     
3. What is Event Bubbling? And how does it work?

ans: event bubbling is an event where an event is accomplished by going upward throwgh it;s parent. normally it's start for bottom of a element 
     and reach it's parent element by going upward

4.What is Event Delegation in JavaScript? Why is it useful?

ans: in js we need clickable event in dom for working with button. but when 100 button to works with painfull. so if use one clickable event
      to it's parent element then it we can it any button what's why it is so useful.
      
5.  What is the difference between preventDefault() and stopPropagation() methods?

ans: They are mainly use to stop action preventDefault() for browser action and stopPropagation() event's journey in js dom.
