module Prog7 where

--problem 1
--write a function unique that returns the list of elements that occur 
--exactly once in the argument list. You must use recursion and not list
--comprehension. A helper function, or functions, may be useful. 
unique :: Eq a => [a] -> [a]
unique [] = []
unique (x:xs)
 |(countElements xs x) >= 1 = unique (removeSameElement x xs)
 |otherwise = x : (unique xs)

countElements :: Eq a => [a] -> a -> Int
countElements [] _ = 0
countElements (x:xs) z
 |z == x = 1+ countElements xs z
 |otherwise = countElements xs z

removeSameElement :: Eq a => a -> [a] -> [a]
removeSameElement x [] = []
removeSameElement x (y:ys)
 |x == y = (removeSameElement x ys)
 |otherwise = y : (removeSameElement x ys)


data Expr1 = Val1 Int
           |Add1 Expr1 Expr1
           |Sub1 Expr1 Expr1
--problem 2
--write a function value1 that evaluates an expression
value1 :: Expr1 -> Int
value1 (Val1 n) = n
value1 (Add1 e1 e2) = (value1 e1) + (value1 e2)
value1 (Sub1 e1 e2) = (value1 e1) - (value1 e2)


--problem 3 
--Create a Expr2 type constructor that also supports multiplication
--and division, in addition to the int literal, addition and subtraction
data Expr2 = Val2 Int
           |Add2 Expr2 Expr2
           |Sub2 Expr2 Expr2 
           |Div2 Expr2 Expr2 
           |Mul2 Expr2 Expr2

--problem 4
--write a function value2 that evaluates an expression, but returns 
--Nothing if there is a division by zero scenario.
value2 :: Expr2 -> Maybe Int
value2 (Val2 a1) = Just a1 
value2 (Mul2 a1 a2) = Just(val(value2 a1) * val(value2 a2))
value2 (Add2 a1 a2) = Just(val(value2 a1) + val(value2 a2))
value2 (Sub2 a1 a2) = Just(val(value2 a1) - val(value2 a2))
value2 (Div2 a1 a2)
 |val(value2 a2) == 0 = Nothing
 |otherwise = Just((val(value2 a1)) `div` (val(value2 a2)))

val(Just x) = x


--problem 5 
--Make the Expr2 type an instnce of the Show class. Appropriate define the
--function show that (Add2 (Val2 3) (Val2 4)) returns the string
--"3+4"
instance Show (Expr2) where
 show (Val2 x) = (show x)
 show (Add2 (Val2 x) (Val2 y)) = "(" ++ (show x) ++ "+" ++ (show y) ++ ")"
 show (Add2 (x) (y)) = "(" ++ (show(x)) ++ "+" ++ (show (y)) ++ ")"
 show (Sub2 (Val2 x) (Val2 y)) = "(" ++ (show x) ++ "-" ++ (show y) ++ ")"
 show (Sub2 (x) (y)) = "(" ++ (show (x)) ++ "-" ++ (show (y)) ++ ")"
 show (Mul2 (Val2 x) (Val2 y)) = "(" ++ (show x) ++ "*" ++ (show y) ++ ")"
 show (Mul2 x y) = "(" ++ (show (x)) ++ "*" ++ (show (y)) ++ ")"
 show (Div2 (Val2 x) (Val2 y)) = "(" ++ (show x) ++ "/" ++ (show y) ++ ")"
 show (Div2 x y) = "(" ++ (show (x)) ++ "/" ++ (show(y)) ++ ")"
 
--problem 6
--Write a function piglatinize that returns a word into its piglatin form:
--if it begins with a vowel, add to the end 'yay', else move non-vowels to 
--the end of the string until a vowel is at the front and then add to the end 
--'ay'
piglatinize :: String -> String
piglatinize (x:xs)
  | x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u' = (x:xs) ++ "yay"
  | otherwise = (listRemain (x:xs) (length (vowelRem (x:xs)))) ++ (vowelRem (x:xs)) ++ "ay"
 
vowelRem :: String -> String
vowelRem [] = []
vowelRem (y:ys)
  | y == 'a' || y == 'e' || y == 'i' || y == 'o' || y == 'u' = []
  | otherwise = [y] ++ vowelRem ys
 
listRemain :: String -> Int -> String
listRemain [] _ = []
listRemain (x:xs) n
  | n > 0 = listRemain (xs) (n-1)
  | otherwise = x : listRemain (xs) (n)


--problem 7
--write a funciton balanced that returns whether a tree is balanced or not
data Tree a = Leaf a | Node (Tree a) (Tree a)

balanced :: Tree a -> Bool
balanced (Leaf x) = True
balanced (Node x y) = abs(countLeaves x - countLeaves y) < 2 && (balanced x) && (balanced y) 

countLeaves :: Tree a -> Int
countLeaves (Leaf a) = 1
countLeaves (Node t1 t2) = countLeaves t1 + countLeaves t2

--problem 8
data Expr3 = Val3 Int
           |Add3 Expr3 Expr3
           |Sub3 Expr3 Expr3
           |Mul3 Expr3 Expr3
           |Div3 Expr3 Expr3
           |If BExpr3 Expr3 Expr3

data BExpr3 = BoolLit Bool
           |Or BExpr3 BExpr3
           |EqualTo Expr3 Expr3
           |LessThan Expr3 Expr3

--Prolem 9
bEval :: BExpr3 -> Bool
bEval (BoolLit x) = x
bEval (Or x y) = (bEval x) || (bEval y) 
bEval (EqualTo x y) = (val (value3 x)) == (val (value3 y))
bEval (LessThan x y) = (val (value3 x)) <  (val (value3 y)) 

--problem 10
value3 :: Expr3 -> Maybe Int
value3 (Val3 x) = Just x
value3 (Add3 x y)
  |(value3 x) == Nothing = Nothing
  |(value3 y) == Nothing = Nothing
  |otherwise = Just (val (value3 x) + val (value3 y))
value3 (Sub3 x y)
  |(value3 x) == Nothing = Nothing
  |(value3 y) == Nothing = Nothing
  |otherwise = Just (val (value3 x) - val (value3 y))
value3 (Mul3 x y)
  |(value3 x) == Nothing = Nothing
  |(value3 y) == Nothing = Nothing
  |otherwise = Just (val (value3 x) * val (value3 y))
value3 (Div3 x y)
  |(value3 x) == Nothing = Nothing
  |(value3 y) == Nothing = Nothing
  |val (value3 y) == 0 = Nothing
  |otherwise = Just ((val (value3 x)) `div` (val (value3 y)))
value3 (If b x y)
  |(bEval b) = Just (val (value3 x))
  |otherwise = Just (val (value3 y))





