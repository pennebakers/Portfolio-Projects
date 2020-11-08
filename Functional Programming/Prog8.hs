{- ##################
   Seth Pennebaker
   Program 8
   ################## -}

module Prog8 where

--Problem 1
--write a function sumSqNeq that computes the "sum of squares of negatives". 
--You must use one or more higher-order functions: map, filter, foldr
sumSqNeg :: [Int] -> Int
sumSqNeg [] = 0
sumSqNeg (xs) = foldr (+) 0 (map(squareNum)(filter(<0)xs))

squareNum :: Int -> Int
squareNum x = x*x

--problem 2
--write a function containing (without any higher order functions) that 
--returns whether each element in the first list is also in the second
--list
containing :: Eq a => [a] -> [a] -> Bool
containing [] [] = True
containing [] _ = True
containing a [] = False
containing (x:xs) y
 |x `elem` y = containing xs y 
 |otherwise = False

--problem 3
--write a function total that applies the function (first argument)
--to every element in the list (second argument) and sums the result
--must use one or more higher-functions: map, filter, foldr
total :: (Int -> Int) -> [Int] -> Int
total f xs = sum(map f xs)

--problem 4 
--write a function containing' (with higher order functions) that
--returns whether each element in the first list is also in the 
--second list. Must use: map, filter, or foldr
containing' :: Eq a => [a] -> [a] -> Bool
containing' [] _ = True
containing' x [] = False
containing' (x:xs) ys
 |length (filter(==x) (ys)) > 0 = containing' xs ys
 |otherwise = False

--problem 5
--write a function lengths that returns a list of lenghts of the 
--given strings. Must: map, foldr, or filter
lengths :: [String] -> [Int]
lengths x = map length x

--probelm 6
--write a function product' that returns the product of a nonempty
--list of numbers. You must use one or more higher-order functions:
--map, filter, foldr
product' :: Num a => [a] -> a
product' xs = foldr (*) 1 xs

--problem 7
--write a function max' that returns the largest element of a nonempty list
--you must use one or more higher-order functions: map, filter, foldr
max' :: Ord a => [a] -> a
max' [a] = a
max' (x:xs)
 |(filter (>x) (xs)) == [] = x
 |otherwise = max'(filter(>x)(xs))

--problem 8
--write a functoin append' that appends two lists.
append' :: [a] -> [a] -> [a]
append' xs ys = foldr (:) ys xs

--problem 9
--write a function filterFirst that get rid of the first element that 
--doesnt meet the function req. 
filterFirst :: (a -> Bool) -> [a] ->[a]
filterFirst f [] = []
filterFirst f (x:xs)
 |f x = x:filterFirst f xs
 |otherwise = xs

--problem 10
--write a function filterLast the removes the last element 
filterLast :: (a -> Bool) -> [a] -> [a]
filterLast f [] = []
filterLast f xs
 |f (last xs) = filterLast f (init xs) ++ [last xs]
 |otherwise = init xs
