#!/usr/bin/env python
# -*- coding: utf-8 -*-
"module for distant string sharing"
from _socket import urlopen

def urlencode(d):
        return '&'.join(['%s=%s'%(k,v) for (k,v) in d.items()])


class Session(object):
    def __init__(self,*args):
        url_base = '/'.join(args)
        if not url_base.startswith('http://'):
          url_base = 'http://' + url_base
        self.url_base = url_base

    def __setattr__(self,name,val):
      if name == 'url_base':
        object.__setattr__(self,name,val)
      else:
        urlopen(self.url_base+'/set/'+name,urlencode({'value':val}))
        
    def __getattr__(self,name):
      if name == 'url_base':
        object.__getattr__(self,name)
      else:
        data = urlopen(self.url_base+'/get/'+name)
        if not len(data): raise KeyError
        return data

    @property
    def __dict__(self):
        data = urlopen(self.url_base+'/list')
        if len(data):
          return json.loads(data)
    def __dir__(self):return self.__dict__.keys()
    def __contains__(self,var): return var in self.__dict__
