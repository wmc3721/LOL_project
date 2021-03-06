#!/usr/bin/env python
# -*- coding:utf-8 -*-
import sys
import traceback

from flask.views import MethodView
from flask import request, jsonify
from apps.common.exception import LOLException
from apps.common.retcode import RetCode

from apps.services.summonerService import SummonerService


class SearchSummonerAPI(MethodView):

    def get(self):
        result = ""
        try:
            region = request.args.get("region")
            summoner_name = request.args.get("summonerName")

            result = SummonerService().search_summoner_detail(region, summoner_name)

        except LOLException as ex:
            print("错误码 = %s，错误描述 = %s" % (ex.get_err_code(), ex.get_err_desc()))
            return jsonify({"retCode": ex.get_err_code()})

        except Exception as ex:
            # todo 用logger记录日志并打印栈
            # print(ex)
            traceback.print_exc()
            return jsonify({"retCode": RetCode.RET_SYSTEM_ERROR})
        # print("result = %s" % result)
        return jsonify({"retCode": 0, "data": result})
