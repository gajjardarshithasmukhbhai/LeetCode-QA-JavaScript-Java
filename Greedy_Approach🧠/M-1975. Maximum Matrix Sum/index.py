def max_matrix_sum(matrix):
    negative_count = 0
    min_num = float('inf')
    result = 0

    for row in matrix:
        for num in row:
            if num < 0:
                negative_count += 1
            min_num = min(min_num, abs(num))
            result += abs(num)

    if negative_count % 2 == 0:
        return result
    else:
        return result - 2 * min_num
