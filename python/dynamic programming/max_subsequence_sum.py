# 定义初始盈利数据
base_data = [1, -6, 11, -4, 13, -5, 2, -5, -3, 12, -9]
base_data = [-1, -6, 11, 4, -13, 5, -2, 5, -3, -12, -9]
print("项目列表为:%s" % base_data)

def MaxSubSeqSum(data, n):
    max_sum = 0     #最大值
    cur_sum = 0     #当前段最大值
    begin_index = 0 #结果起始索引
    end_index = 0   #结果结束索引
    predict_index=0 #预测起始索引

    for cur_index in range(0, n):
        #记录当前段的和，若小于0则丢弃这一段
        cur_sum += data[cur_index]
        if cur_sum < 0:
            cur_sum = 0
            predict_index = cur_index + 1

        #用当前段记录总和与最大和相比
        #若大于最大和则更新它的值
        if (cur_sum > max_sum):
            max_sum = cur_sum
            end_index = cur_index
            begin_index = predict_index

    return max_sum, begin_index, end_index

result = MaxSubSeqSum(base_data, len(base_data))

if result[0] > 0:
    print("最大盈利=%s万元,需要做的项目编号范围是%s-%s"
        % (result[0], result[1] + 1, result[2] + 1))
else:
    print("没有最大盈利，这批项目都是坑人的")
