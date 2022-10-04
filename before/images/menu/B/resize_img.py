
import numpy as np
import cv2
import glob

    

dist_width = 960
dist_height = 640

images = glob.glob('old/*.jpg')
res_img = 'B'
i = 1
for fname in images:

	imgbgr = cv2.imread(fname, cv2.IMREAD_COLOR)

	h = imgbgr.shape[0]
	w = imgbgr.shape[1]
	img_result = imgbgr
	img_result = cv2.resize(img_result, None, fx=dist_width/w, fy=dist_height/h, interpolation = cv2.INTER_CUBIC)
	img_name = res_img+str(i)+'.jpg'

	cv2.imwrite(img_name,img_result)
	i = i+1

