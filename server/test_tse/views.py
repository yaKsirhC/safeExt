from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.http import JsonResponse
from pytube import YouTube

full_path = "/home/chris-kay/Downloads/ytb/"
default_filters = {"progressive": True, "resolution": "720p"}

@csrf_exempt
def hello(request):
    if(request.method == 'POST'):
        jurl = request.body.decode('utf-8')
        url = json.loads(jurl)
        ytb = YouTube(url['url'])
        vid_list =ytb.streams.filter(**default_filters)
        vid_list[0].download(full_path, ytb.title + '.mp4')
        return JsonResponse({'status': 'ok'})
def default(request):
    if(request.method == 'GET'):
        return JsonResponse({"d_filters": default_filters, "d_path": full_path})
        