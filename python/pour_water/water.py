A,B,C = 8,5,3
init_state = (8,0,0)
target_state = (7,1,0)

def get_next_state(x,y,z):
	return {
		((0,x+y,z) if x+y<=B else (x-(B-y),B,z)) : 'A->B',
		((0,y,x+z) if x+z<=C else (x-(C-z),y,C)) : 'A->C',
		((x+y,0,z) if x+y<=A else (A,y-(A-x),z)) : 'B->A',
		((x,0,y+z) if y+z<=C else (x,y-(C-z),C)) : 'B->C',
		((x+z,y,0) if x+z<=A else (A,y,z-(A-x))) : 'C->A',
		((x,y+z,0) if y+z<=B else (x,B,z-(B-y))) : 'C->B'
	}


def clac_result(start):
	if start == target_state:
		return [start]

	lookup=set(start)
	path_pool = [[start]]

	while path_pool:
		main_path = path_pool.pop(0)
		now_state = main_path[-1]
		next_state_list = get_next_state(*now_state).items()

		for (state, desc) in next_state_list:
			if state not in lookup:
				lookup.add(now_state)
				new_path = main_path + [desc, state]
				if target_state in new_path:
					return new_path
				else:
					path_pool.append(new_path)
	return []

print(clac_result(init_state))